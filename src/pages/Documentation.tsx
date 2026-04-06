export default function Documentation() {
  return (
    <div className="pt-4 max-w-[1440px] mx-auto flex min-h-screen">
      <aside className="w-72 hidden md:block border-r border-white/5 bg-surface-container-low px-8 py-12 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.2em] mb-4">Core Concepts</h3>
            <ul className="space-y-3">
              <li><a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#introduction"><span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary"></span> Introduction</a></li>
              <li><a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#pdd-schema"><span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary"></span> PDD Schema</a></li>
              <li><a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#step-types"><span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary"></span> Step Types</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.2em] mb-4">Reference</h3>
            <ul className="space-y-3">
              <li><a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#validation-rules"><span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary"></span> Validation Rules</a></li>
            </ul>
          </div>
        </div>
      </aside>
      <main className="flex-1 px-8 lg:px-16 py-12 overflow-x-hidden">
        <header className="mb-20" id="introduction">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-on-surface mb-6 font-headline leading-[0.9]">Introduction to Orion</h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed">Orion is an enterprise-grade execution engine designed to bridge the gap between LLM intelligence and reliable desktop/web automation. It uses Process Definition Documents (PDDs) as a high-fidelity YAML-based instruction set for sovereign automation agents.</p>
        </header>
        {/* Section 1: Purpose & MVP Scope */}
        <section className="mb-24 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-label text-primary-fixed-dim text-2xl">01</span>
                <h2 className="text-2xl font-semibold font-headline">Purpose & MVP Scope</h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed">The PDD serves as the primary bridge between human intent and machine execution. For the MVP, the schema is intentionally narrow to support core workflows while ensuring strict machine adherence.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span className="text-sm text-secondary">Developer-authored workflows with explicit reasoning checkpoints.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span className="text-sm text-secondary">Strict turn ordering with checkpointable step IDs.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span className="text-sm text-secondary">Human handoff and simple, explicit failure handling.</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative glass-panel rounded-xl p-8 border border-white/5 h-full flex flex-col justify-center">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">edit_note</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Developer-Centric</h4>
                    <p className="text-sm text-on-surface-variant">Easy to write, validate, and diff using standard YAML tools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">account_tree</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Explicit Orchestration</h4>
                    <p className="text-sm text-on-surface-variant">Clearly defined reasoning allowed zones and failure semantics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: YAML Schema */}
        <section className="mb-24 scroll-mt-24" id="pdd-schema">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-label text-primary-fixed-dim text-2xl">01</span>
            <h2 className="text-2xl font-semibold font-headline">Process Definition Document Schema</h2>
          </div>
          <p className="text-secondary mb-8 leading-relaxed">The Canonical Authoring Format for Orion is YAML. This format is designed for developer utility and daemon parsing efficiency.</p>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden shadow-2xl">
            <div className="bg-surface-container px-6 py-3 border-b border-white/5 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
              </div>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">erp_po_intake.yaml</span>
            </div>
            <div className="p-8 code-block text-sm leading-loose overflow-x-auto text-on-surface/90">
              <pre><code><span className="text-primary-fixed-dim">version:</span> 1{'\n'}
<span className="text-primary-fixed-dim">title:</span> ERP PO Intake{'\n'}
{'\n'}
<span className="text-primary-fixed-dim">workflow:</span>{'\n'}
{'  '}<span className="text-primary-fixed-dim">id:</span> erp_po_intake{'\n'}
{'  '}<span className="text-primary-fixed-dim">name:</span> ERP PO Intake{'\n'}
{'  '}<span className="text-primary-fixed-dim">entrypoint:</span> open_erp{'\n'}
{'\n'}
<span className="text-primary-fixed-dim">steps:</span>{'\n'}
{'  '}<span className="text-primary-fixed-dim">- id:</span> open_erp{'\n'}
{'    '}<span className="text-primary-fixed-dim">type:</span> deterministic{'\n'}
{'    '}<span className="text-primary-fixed-dim">actor:</span> daemon{'\n'}
{'    '}<span className="text-primary-fixed-dim">tool:</span> process_open{'\n'}
{'    '}<span className="text-primary-fixed-dim">args:</span> {'{'} name: ACME_ERP.EXE {'}'}{'\n'}
{'    '}<span className="text-primary-fixed-dim">success:</span>{'\n'}
{'      '}<span className="text-primary-fixed-dim">type:</span> window_exists{'\n'}
{'      '}<span className="text-primary-fixed-dim">title_contains:</span> ACME ERP{'\n'}
{'    '}<span className="text-primary-fixed-dim">next:</span> resolve_sku{'\n'}
{'\n'}
{'  '}<span className="text-primary-fixed-dim">- id:</span> resolve_sku{'\n'}
{'    '}<span className="text-primary-fixed-dim">type:</span> reasoning{'\n'}
{'    '}<span className="text-primary-fixed-dim">actor:</span> subagent.sku_resolver{'\n'}
{'    '}<span className="text-primary-fixed-dim">intent:</span> Choose the ERP SKU that best matches the PO item.{'\n'}
{'    '}<span className="text-primary-fixed-dim">success:</span>{'\n'}
{'      '}<span className="text-primary-fixed-dim">type:</span> artifact_exists{'\n'}
{'      '}<span className="text-primary-fixed-dim">ref:</span> selected_sku{'\n'}
{'    '}<span className="text-primary-fixed-dim">on_fail:</span>{'\n'}
{'      '}<span className="text-primary-fixed-dim">action:</span> handoff{'\n'}
{'      '}<span className="text-primary-fixed-dim">target:</span> human.supervisor</code></pre>
            </div>
          </div>
        </section>
        {/* Section 3: Detailed Step Schema */}
        <section className="mb-24 scroll-mt-24" id="step-types">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-label text-primary-fixed-dim text-2xl">02</span>
            <h2 className="text-2xl font-semibold font-headline">Detailed Step Schema</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deterministic */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-white/5 group hover:border-primary/20 transition-colors">
              <h3 className="text-primary font-label text-xs tracking-widest uppercase mb-4">deterministic</h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">Executes through specific tools or skills. Requires <code className="text-primary-fixed-dim">tool</code> and <code className="text-primary-fixed-dim">success</code> conditions.</p>
              <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">Typical Actors:</div>
              <div className="text-xs text-on-surface mt-1">daemon, main_agent</div>
            </div>
            {/* Reasoning */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-white/5 group hover:border-primary/20 transition-colors">
              <h3 className="text-primary font-label text-xs tracking-widest uppercase mb-4">reasoning</h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">Interprets ambiguity or makes decisions from context. Requires a clearly defined <code className="text-primary-fixed-dim">intent</code>.</p>
              <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">Typical Actors:</div>
              <div className="text-xs text-on-surface mt-1">main_agent, subagent.&lt;id&gt;</div>
            </div>
            {/* Human */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-white/5 group hover:border-primary/20 transition-colors">
              <h3 className="text-primary font-label text-xs tracking-widest uppercase mb-4">human</h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">Requires human action or clarification. Uses <code className="text-primary-fixed-dim">intent</code> to guide the operator.</p>
              <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">Typical Actors:</div>
              <div className="text-xs text-on-surface mt-1">human.supervisor</div>
            </div>
          </div>
        </section>
        {/* Section 4: Validation Rules */}
        <section className="mb-24 scroll-mt-24" id="validation-rules">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-label text-primary-fixed-dim text-2xl">03</span>
            <h2 className="text-2xl font-semibold font-headline">Validation Rules</h2>
          </div>
          <div className="glass-panel rounded-xl p-8 border border-white/5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span className="text-sm text-on-surface-variant">Top-level keys <code className="text-primary">version</code>, <code className="text-primary">title</code>, <code className="text-primary">workflow</code>, and <code className="text-primary">steps</code> are mandatory.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span className="text-sm text-on-surface-variant">Every workflow step must have a unique, stable <code className="text-primary">id</code>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span className="text-sm text-on-surface-variant">Steps must declare <code className="text-primary">type</code>, <code className="text-primary">actor</code>, and <code className="text-primary">success</code>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span className="text-sm text-on-surface-variant">All <code className="text-primary">next</code> and branch <code className="text-primary">goto</code> refs must map to valid step IDs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">5.</span>
                <span className="text-sm text-on-surface-variant"><code className="text-primary">reasoning</code> and <code className="text-primary">human</code> steps require an <code className="text-primary">intent</code> field.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">6.</span>
                <span className="text-sm text-on-surface-variant">Rule references must be IDs only; raw rule text is disallowed.</span>
              </li>
            </ul>
          </div>
        </section>
        {/* Decorative Footer Image */}
        <section className="mb-12">
          <div className="relative h-64 w-full rounded-xl overflow-hidden grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
            <img alt="Cybernetic server infrastructure" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3M2hhN0UwP9WqVGiON0DKjjvlXsW8MF7bX50stojydn2bPEOp7Ch1eFC3RDsODebSYA7BEmWb_IXCfduamj0ygxYyuGu0Wc-Wg72tOADohD-LS14aQlZ0S7fjXX1nrf34DJGPNHkAbx_9iKReIlciFVhbRcW8x2zghtl7F5v7Q6nplb1f6yid2vAOrlhvOuVGCaodyD8ETEd42AoLA5Mhbs6-bBTWg8Wv0H1JO7FkYWfWYKPeMGERw8IaGsc6xEScQ9RVnT867_VM"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
