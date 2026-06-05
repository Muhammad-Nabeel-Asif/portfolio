import { useState, useEffect } from 'react';
import { API_TEST_CASES } from '../data/portfolioData';
import { RefreshCw, Send, ShieldCheck, Terminal, Copy, Check } from 'lucide-react';

export default function ApiPlayground() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('delight_classify');
  const [requestBodyText, setRequestBodyText] = useState<string>('');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);
  const [simulatedResponse, setSimulatedResponse] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [copiedResponse, setCopiedResponse] = useState<boolean>(false);

  const currentCase = API_TEST_CASES.find(c => c.id === selectedCaseId) || API_TEST_CASES[0];

  // Initialize body text when test case changes
  useEffect(() => {
    if (currentCase) {
      setRequestBodyText(currentCase.requestBody || '');
      setSimulatedLogs([]);
      setSimulatedResponse('');
      setProgressPercent(0);
    }
  }, [selectedCaseId]);

  const handleSimulate = () => {
    if (isSimulating) return;

    setIsSimulating(true);
    setSimulatedLogs([]);
    setSimulatedResponse('');
    setProgressPercent(0);

    const totalSteps = currentCase.logs.length;
    let step = 0;

    // Incremental log roll-out
    const interval = setInterval(() => {
      if (step < totalSteps) {
        setSimulatedLogs(prev => [...prev, currentCase.logs[step]]);
        step++;
        setProgressPercent(Math.floor((step / totalSteps) * 100));
      } else {
        clearInterval(interval);
        setSimulatedResponse(currentCase.expectedResponse);
        setIsSimulating(false);
      }
    }, 450); // Roll out lines every 450ms
  };

  const copyResponseToClipboard = () => {
    if (!simulatedResponse) return;
    navigator.clipboard.writeText(simulatedResponse);
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  return (
    <div className="bg-white border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-900 rounded-2xl shadow-2xl p-4 sm:p-6">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-200 dark:border-zinc-900 pb-5 mb-6 gap-4">
        <div>
          <h2 className="text-fluid-h2 font-bold text-zinc-900 dark:text-white font-sans flex items-center gap-2">
            <Terminal className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            <span>Interactive Endpoint Sandbox (API Playground)</span>
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans mt-0.5">Test real-time microservices simulations. Dispatch custom request payloads and monitor streaming server execution routes.</p>
        </div>

        {/* Endpoints triggers */}
        <div className="flex flex-row md:flex-wrap overflow-x-auto md:overflow-x-visible pb-1.5 md:pb-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900/60 dark:border-zinc-805 self-start md:self-auto max-w-full scrollbar-thin" aria-label="Simulated Endpoints">
          {API_TEST_CASES.map((tCase) => (
            <button
              key={tCase.id}
              id={`api-btn-${tCase.id}`}
              onClick={() => {
                if (!isSimulating) {
                  setSelectedCaseId(tCase.id);
                }
              }}
              disabled={isSimulating}
              className={`cursor-pointer shrink-0 px-3 py-1.5 rounded-lg text-4xs font-mono font-medium transition-all ${
                selectedCaseId === tCase.id
                  ? 'bg-white text-zinc-900 border border-zinc-300 dark:bg-zinc-800 dark:text-white dark:border-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 disabled:opacity-50'
              }`}
            >
              {tCase.method} {tCase.path.replace('/api/v1', '')}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-zinc-50 border border-zinc-200 dark:bg-zinc-900/35 dark:border-zinc-900 rounded-xl p-4 mb-6">
        <p className="text-xs text-zinc-700 dark:text-zinc-300 font-sans">
          <strong>Path Action:</strong> {currentCase.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left column: Request parameters (terminal-style, dark in both themes) */}
        <div className="flex flex-col bg-zinc-950 border border-zinc-300 dark:border-zinc-900 rounded-xl overflow-hidden min-h-[360px]">
          <div className="flex items-center justify-between bg-zinc-900/80 px-4 py-2 border-b border-zinc-950 select-none">
            <span className="text-4xs font-mono font-medium text-zinc-400 uppercase">Incoming JSON Payloads</span>
            <div className="flex items-center space-x-2">
              <span className={`px-1.5 py-0.5 rounded text-4xs font-mono font-bold leading-none ${
                currentCase.method === 'POST' ? 'bg-sky-505/10 text-sky-400 border border-sky-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}>{currentCase.method}</span>
              <span className="text-4xs font-mono text-zinc-500">{currentCase.path}</span>
            </div>
          </div>

          <div className="flex-1 p-4 bg-zinc-950 flex flex-col justify-between">
            <textarea
              id="api-payload-editor"
              value={requestBodyText}
              onChange={(e) => setRequestBodyText(e.target.value)}
              disabled={isSimulating}
              className="w-full flex-1 min-h-[220px] font-mono text-3xs text-zinc-300 bg-transparent border-0 resize-none focus:outline-none focus:ring-0 leading-normal"
            />

            <div className="border-t border-zinc-900/60 pt-4 mt-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                SSL secured // client_bearer
              </span>
              <button
                id="api-trigger-post"
                onClick={handleSimulate}
                disabled={isSimulating}
                className="cursor-pointer inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed justify-center text-xs font-medium text-black px-4.5 py-2 rounded-lg transition-all active:scale-[0.98]"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>Processing {progressPercent}%</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Simulated Request</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Live execution console and JSON Response (terminal-style, dark in both themes) */}
        <div className="flex flex-col gap-4">
          
          {/* Active compiling server logs */}
          <div className="bg-zinc-950 border border-zinc-300 dark:border-zinc-900 rounded-xl overflow-hidden flex flex-col h-[200px]">
            <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b border-zinc-950">
              <span className="text-4xs font-mono font-medium text-emerald-400">LOG_OUTPUT: STDOUT // server_host</span>
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isSimulating ? 'animate-ping' : ''}`}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex-1 p-4 bg-zinc-950 font-mono text-4xs text-zinc-400 overflow-auto flex flex-col gap-1.5 scrollbar-thin">
              {simulatedLogs.map((log, index) => (
                <div key={index} className="leading-relaxed border-l-2 border-zinc-800/80 pl-2 text-zinc-400">
                  {log}
                </div>
              ))}
              {!isSimulating && simulatedLogs.length === 0 && (
                <div className="m-auto text-zinc-650 italic text-center select-none text-[11px]">
                  🚀 Dispatch a request payload to trigger live microservice stack parsing.
                </div>
              )}
            </div>
          </div>

          {/* Response Payload mockup */}
          <div className="bg-zinc-950 border border-zinc-300 dark:border-zinc-900 rounded-xl overflow-hidden flex flex-col flex-1 min-h-[180px]">
            <div className="flex items-center justify-between bg-zinc-900 px-4 py-3 border-b border-zinc-950">
              <span className="text-4xs font-mono font-medium text-zinc-400 uppercase">Received Response Json</span>
              {simulatedResponse && (
                <button
                  id="api-copy-resp"
                  onClick={copyResponseToClipboard}
                  className="cursor-pointer text-zinc-500 hover:text-white transition-all flex items-center space-x-1"
                  title="Copy Response JSON"
                >
                  {copiedResponse ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span className="text-4xs font-mono">{copiedResponse ? 'Copied' : 'Copy'}</span>
                </button>
              )}
            </div>

            <div className="flex-1 p-4 bg-zinc-950 font-mono text-3xs text-sky-300 leading-normal overflow-auto max-h-[200px]">
              {simulatedResponse ? (
                <pre className="whitespace-pre">
                  <code>{simulatedResponse}</code>
                </pre>
              ) : (
                <div className="h-full flex items-center justify-center text-zinc-650 italic select-none text-[11px]">
                  {isSimulating ? 'Processing request parameters...' : 'Awaiting simulation output...'}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
