import { useState, useMemo } from 'react';
import { SYSTEM_ARCHITECTURES } from '../data/portfolioData';
import { SystemArchitecture, ArchNode } from '../types';
import { 
  Play, 
  Code, 
  Cpu, 
  Workflow, 
  ArrowRight,
  Database, 
  Server, 
  Bot, 
  Layers,
  Zap
} from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [selectedArchId, setSelectedArchId] = useState<string>('delight_desk');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('bullmq_dispatch');
  const [isFlowActive, setIsFlowActive] = useState<boolean>(true);

  const currentArch: SystemArchitecture = useMemo(() => {
    return SYSTEM_ARCHITECTURES[selectedArchId] || SYSTEM_ARCHITECTURES.delight_desk;
  }, [selectedArchId]);

  const selectedNode = useMemo(() => {
    return currentArch.nodes.find(n => n.id === selectedNodeId) || currentArch.nodes[0];
  }, [currentArch, selectedNodeId]);

  // Helper to determine icon based on node type
  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'trigger': return Zap;
      case 'queue': return Layers;
      case 'orchestration': return Workflow;
      case 'logic': return Cpu;
      case 'storage': return Database;
      case 'integration': return Server;
      default: return Bot;
    }
  };

  return (
    <div className="bg-zinc-950 rounded-2xl border border-zinc-900 shadow-2xl p-4 sm:p-6">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-900 pb-5 mb-6 gap-4">
        <div>
          <h2 className="text-fluid-h2 font-bold text-white font-sans flex items-center gap-2">
            <Workflow className="h-5 w-5 text-emerald-400" />
            <span>Interactive System Design Sandbox</span>
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-0.5">Click components dynamically to analyze real production payloads, architecture code classes, and latency budgets.</p>
        </div>

        {/* System toggles */}
        <div className="flex bg-zinc-900/60 p-1 rounded-xl border border-zinc-800 self-start md:self-auto" aria-label="System Designs Selector">
          {Object.values(SYSTEM_ARCHITECTURES).map((arch) => (
            <button
              key={arch.id}
              id={`arch-tab-${arch.id}`}
              onClick={() => {
                setSelectedArchId(arch.id);
                // Auto-select first node of new architecture mapping
                const firstNode = arch.nodes[0];
                if (firstNode) {
                  setSelectedNodeId(firstNode.id);
                }
              }}
              className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-2xs font-mono font-medium transition-all ${
                selectedArchId === arch.id
                  ? 'bg-zinc-805 text-white shadow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {arch.id === 'delight_desk' ? 'Delight Desk AI' : arch.id === 'bookmeet' ? 'Calendar Sync' : 'Web3 Identity'}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-zinc-300 font-sans bg-zinc-900/30 border border-zinc-900 rounded-xl p-4 mb-6 leading-relaxed">
        <strong>Overview:</strong> {currentArch.description}
      </p>

      {/* Systems KPIs summary widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {currentArch.kpis.map((kpi, idx) => (
          <div key={idx} className="flex items-center justify-between border border-zinc-900 bg-zinc-900/10 rounded-xl p-3 px-4">
            <span className="text-3xs font-mono text-zinc-500 uppercase">{kpi.label}</span>
            <span className={`text-xs font-mono font-bold ${
              kpi.color === 'emerald' ? 'text-emerald-400' : kpi.color === 'blue' ? 'text-blue-400' : 'text-indigo-400'
            }`}>{kpi.value}</span>
          </div>
        ))}
      </div>

      {/* Core Architectural Diagram Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Diagram Canvas Box (Lg: Column span 7) */}
        <div className="lg:col-span-7 border border-zinc-900 bg-zinc-950/40 rounded-xl min-h-[380px] p-4 relative overflow-x-auto select-none">
          {/* Horizontal-scroll affordance on smaller screens */}
          <div className="lg:hidden absolute top-2 right-2 z-30 inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-1 text-4xs font-mono text-zinc-400 backdrop-blur-sm pointer-events-none">
            <span>Swipe to explore</span>
            <ArrowRight className="h-3 w-3" />
          </div>
          <div className="min-w-[680px] lg:min-w-0 w-full h-[340px] lg:h-full relative">
            
            {/* Svg links trace lines underneath node blocks */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="edgeGradientDashed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Print connecting vector pathways */}
              {currentArch.edges.map((edge, idx) => {
                const fromNode = currentArch.nodes.find(n => n.id === edge.from);
                const toNode = currentArch.nodes.find(n => n.id === edge.to);
                
                if (!fromNode || !toNode) return null;

                // Compute absolute positions inside 100% boundary coordinates
                const x1 = `${fromNode.coords.x}%`;
                const y1 = `${fromNode.coords.y}%`;
                const x2 = `${toNode.coords.x}%`;
                const y2 = `${toNode.coords.y}%`;

                // Decide style rules
                const isEventDashed = edge.type === 'event' || edge.type === 'async';

                return (
                  <g key={idx}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isEventDashed ? "url(#edgeGradientDashed)" : "url(#edgeGradient)"}
                      strokeWidth="1.5"
                      strokeDasharray={isEventDashed ? "5,5" : "none"}
                    />
                    {/* Packet animation tracer flowing from source to target node */}
                    {isFlowActive && edge.animated && (
                      <circle r="4" fill="#10b981">
                        <animate
                          attributeName="cx"
                          values={`${fromNode.coords.x}%; ${toNode.coords.x}%`}
                          keyTimes="0; 1"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`${fromNode.coords.y}%; ${toNode.coords.y}%`}
                          keyTimes="0; 1"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0; 1; 1; 0"
                          keyTimes="0; 0.1; 0.9; 1"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Render individual items */}
            <div className="absolute inset-0 w-full h-full p-2">
              {currentArch.nodes.map((node: ArchNode) => {
                const NodeIcon = getNodeIcon(node.type);
                const isSelected = selectedNodeId === node.id;
                
                return (
                  <button
                    key={node.id}
                    id={`arch-node-p-${node.id}`}
                    onClick={() => setSelectedNodeId(node.id)}
                    style={{
                      left: `${node.coords.x}%`,
                      top: `${node.coords.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`cursor-pointer absolute z-20 flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-zinc-900 border-emerald-500 shadow-lg text-emerald-400 ring-2 ring-emerald-500/10'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    } w-36 h-18 text-center select-none active:scale-95`}
                  >
                    <NodeIcon className={`h-4 w-4 mb-1 ${isSelected ? 'text-emerald-450' : 'text-zinc-500'}`} />
                    <span className="text-3xs font-semibold tracking-tight leading-tight line-clamp-1">{node.label}</span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5 max-w-[110px] truncate">{node.tech}</span>
                  </button>
                );
              })}
            </div>

            {/* Trigger flowchart simulation */}
            <div className="absolute bottom-3 left-4 flex space-x-4 items-center">
              <button
                id="arch-trigger-flow"
                onClick={() => setIsFlowActive(!isFlowActive)}
                className="cursor-pointer inline-flex items-center space-x-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-4xs font-mono text-zinc-400 hover:text-zinc-200 transition-all"
              >
                <Play className={`h-3 w-3 ${isFlowActive ? 'text-emerald-400 fill-emerald-400/20' : 'text-zinc-500'}`} />
                <span>{isFlowActive ? 'FLOW: ACTIVE' : 'FLOW: STATIC'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Selected Component Code & Diagnostics Panel (Lg: Column span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Node metadata info block */}
          <div className="border border-zinc-900 bg-zinc-900/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 border-b border-zinc-900 pb-3 mb-3">
                <div className="p-1.5 rounded bg-zinc-950/60 border border-zinc-800 text-zinc-400">
                  {selectedNode && (() => {
                    const SelectedIcon = getNodeIcon(selectedNode.type);
                    return <SelectedIcon className="h-4 w-4 text-emerald-400" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-tight">{selectedNode?.label}</h3>
                  <p className="text-3xs font-mono text-emerald-400/90 tracking-wider uppercase">{selectedNode?.tech}</p>
                </div>
              </div>

              <p className="text-2xs text-zinc-400 leading-normal font-sans">
                {selectedNode?.description}
              </p>

              {/* Node Metrics if they exist */}
              {selectedNode?.metrics && selectedNode.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {selectedNode.metrics.map((metric, index) => (
                    <div key={index} className="rounded-lg bg-zinc-950/40 p-2 border border-zinc-900/40">
                      <span className="block text-4xs font-mono text-zinc-500 uppercase leading-none">{metric.label}</span>
                      <span className="block text-xs font-mono font-semibold text-white mt-1 leading-none">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Technical code terminal mockup highlighting backend classes */}
          <div className="flex-1 border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden flex flex-col min-h-[220px]">
            <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b border-zinc-950">
              <div className="flex items-center space-x-1.5">
                <span className="block h-2 w-2 rounded-full bg-red-500/80"></span>
                <span className="block h-2 w-2 rounded-full bg-amber-500/80"></span>
                <span className="block h-2 w-2 rounded-full bg-emerald-500/80"></span>
                <span className="text-3xs font-mono text-zinc-400 ml-2">controller.ts // spec_impl</span>
              </div>
              <Code className="h-3.5 w-3.5 text-zinc-500" />
            </div>
            
            <div className="bg-zinc-950/80 p-4 font-mono text-3xs text-zinc-300 leading-normal overflow-auto max-h-[280px] flex-1">
              <pre className="whitespace-pre select-all text-emerald-300/90">
                <code>
                  {selectedNode?.codeSnippet || '// Click another design component block to inspect code'}
                </code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
