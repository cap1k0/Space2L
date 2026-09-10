import Link from "next/link";
import MetricsChart from "./MetricsChart";

export default function HowBrucaEditsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/docs" className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-800">
          ← Back to docs
        </Link>

        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-500">
          Getting started
        </p>
        <h1 className="mb-2 text-3xl font-medium">
          Evaluating Qwen2.5-14B-Instruct for Historical French Text Normalization
        </h1>
        <p className="mb-10 text-base text-neutral-500">
          A human-AI editing comparison
        </p>

        <div className="space-y-10 text-base leading-relaxed text-neutral-700">
          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">Abstract</h2>
            <p className="mb-4">
              This pilot study investigates the ability of a large language
              model (LLM), <strong className="font-medium">Qwen2.5-14B-Instruct</strong>,
              to perform historical French text normalization and linguistic
              editing.
            </p>
            <p className="mb-4">
              The experiment compares AI-generated corrections with human
              expert-style normalization using a small parallel corpus
              consisting of original historical French texts, human-edited
              versions, and AI-generated outputs.
            </p>
            <p className="mb-4">
              This work represents the baseline stage of a larger research
              direction. The next phase aims to develop a specialized
              language editing model by collecting larger expert-annotated
              datasets, incorporating corpus linguistic resources, and
              applying parameter-efficient fine-tuning techniques such as
              LoRA.
            </p>
            <p>
              The long-term objective is to create an AI-assisted linguistic
              editing system capable of handling historical, academic, and
              domain-specific language variation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">1. Introduction</h2>
            <p className="mb-4">
              Historical documents contain complex spelling variations,
              grammatical structures, and linguistic forms that change over
              time. Automatic processing of these documents requires models
              that can distinguish between:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>acceptable historical variation</li>
              <li>spelling inconsistencies</li>
              <li>genuine grammatical errors</li>
              <li>unnecessary modernization</li>
            </ul>
            <p className="mb-4">
              Recent advances in generative AI provide new possibilities for
              language editing and normalization.
            </p>
            <p>
              This project investigates whether a general-purpose
              instruction-following model can approximate expert linguistic
              editing decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">2. Related Work</h2>
            <p className="mb-4">This study is inspired by:</p>
            <blockquote className="mb-4 border-l-2 border-neutral-200 pl-4 text-sm text-neutral-600">
              Rubino, R., Gerlach, J., Mutal, J., &amp; Bouillon, P. (2024).
              Normalizing without Modernizing: Keeping Historical Wordforms
              of Middle French while Reducing Spelling Variants. Findings of
              the Association for Computational Linguistics: NAACL 2024, pp.
              3394–3402.
            </blockquote>
            <p className="mb-4">
              The authors studied automatic normalization of Middle French
              historical documents from the 16th century.
            </p>
            <p className="mb-4">
              Their approach focused on reducing spelling variation while
              preserving historical language characteristics instead of
              fully modernizing the text.
            </p>
            <p className="mb-4">
              They created a manually curated parallel corpus (Historical
              Text → Human Normalization) and trained neural models based on
              pre-trained architectures.
            </p>
            <p className="mb-2">Their experiments evaluated models using:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>BLEU</li>
              <li>chrF</li>
              <li>TER</li>
              <li>WER</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">3. Our Experimental Approach</h2>
            <p className="mb-4">Unlike the original study, this experiment evaluates:</p>
            <p className="mb-4 font-medium">Model: Qwen2.5-14B-Instruct</p>
            <p className="mb-2">The model receives historical French text and generates:</p>
            <ol className="mb-4 list-decimal space-y-1 pl-5">
              <li>Edited text</li>
              <li>Explanation of modifications</li>
              <li>Classification of changes</li>
            </ol>
            <p className="mb-2">The comparison pipeline:</p>
            <div className="rounded-lg bg-neutral-50 p-4 text-sm">
              Original Historical Text → Human Linguistic Editing → AI Generated Editing → Statistical Comparison
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">4. Dataset Construction</h2>
            <p className="mb-4">
              A small evaluation dataset was created from historical French
              examples.
            </p>
            <p className="mb-4">Each sample contains:</p>
            <div className="mb-6 overflow-hidden rounded-lg border border-neutral-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-2 font-medium">Field</th>
                    <th className="px-4 py-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-2">Original</td>
                    <td className="px-4 py-2">Historical manuscript form</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-2">Human</td>
                    <td className="px-4 py-2">Human-style normalized version</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-2">AI</td>
                    <td className="px-4 py-2">Qwen generated correction</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-2 font-medium">Example</p>
            <div className="space-y-3 rounded-lg bg-neutral-50 p-4 text-sm">
              <p>
                <span className="font-medium">Original: </span>
                Ledictz jour, vendredy 28 octobrix 1547, en l'Evesché
              </p>
              <p>
                <span className="font-medium">Human: </span>
                Ledit jour vendredi 28 octobris 1547 en l'Évêché
              </p>
              <p>
                <span className="font-medium">AI: </span>
                Le dict jour, vendredi 28 octobre 1547, en l'Évêché
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">5. Evaluation Metrics</h2>

            <div className="mb-6">
              <h3 className="mb-2 text-base font-medium text-neutral-900">BLEU</h3>
              <p className="mb-2">
                BLEU measures similarity between generated text and reference
                human editing.
              </p>
              <p className="mb-2 text-sm text-neutral-500">Formula:</p>
              <div className="mb-2 rounded-lg bg-neutral-50 p-4 font-mono text-sm">
                BLEU = BP × exp(Σ w_n log(p_n))
              </div>
              <p className="text-sm text-neutral-600">Higher BLEU indicates closer similarity.</p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-base font-medium text-neutral-900">chrF</h3>
              <p className="mb-2">
                chrF evaluates character-level similarity. It is useful for
                historical languages because many differences occur at
                spelling level.
              </p>
              <p className="mb-2 text-sm text-neutral-500">Formula:</p>
              <div className="rounded-lg bg-neutral-50 p-4 font-mono text-sm">
                chrF = (1 + β²)PR / (β²P + R)
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-neutral-900">Word Error Rate (WER)</h3>
              <p className="mb-2">WER measures word-level editing distance.</p>
              <p className="mb-2 text-sm text-neutral-500">Formula:</p>
              <div className="mb-2 rounded-lg bg-neutral-50 p-4 font-mono text-sm">
                WER = (Substitutions + Deletions + Insertions) / Reference Words
              </div>
              <p className="text-sm text-neutral-600">Lower WER indicates better performance.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">6. Statistical Analysis with R</h2>
            <p className="mb-4">The evaluation data was processed using R.</p>
            <p className="mb-2 text-sm text-neutral-500">Example workflow:</p>
            <pre className="mb-4 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100">
{`library(stringdist)

distance <- stringdist(
  human_text,
  ai_text,
  method = "lv"
)`}
            </pre>
            <p>Metrics are visualized using R-generated charts.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">7. Results Visualization</h2>
            <p className="mb-4">
              Comparing human normalization against the AI-generated output
              across the three metrics:
            </p>
            <MetricsChart />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">8. Error Analysis</h2>
            <p className="mb-4">
              The preliminary evaluation shows several types of AI editing
              behavior.
            </p>

            <div className="mb-4">
              <h3 className="mb-2 text-base font-medium text-neutral-900">Modernization</h3>
              <p className="mb-2">
                The model sometimes replaces historical forms with modern
                equivalents.
              </p>
              <p className="mb-2 text-sm">
                Example: <span className="font-medium">H:</span> octobris →{" "}
                <span className="font-medium">AI:</span> octobre
              </p>
              <p className="text-sm text-neutral-600">
                The AI correction is linguistically understandable but
                changes the historical form.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-base font-medium text-neutral-900">Lexical Replacement</h3>
              <p className="text-sm">
                Example: <span className="font-medium">H:</span> ferratier →{" "}
                <span className="font-medium">AI:</span> ferrailleur
              </p>
              <p className="text-sm text-neutral-600">
                The model selects a modern lexical equivalent.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-neutral-900">Structural Modification</h3>
              <p>
                Some corrections modify syntax rather than only spelling.
                This indicates the importance of domain-specific training.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">9. Future Development</h2>
            <p className="mb-4">
              This experiment represents the first baseline version of the
              system.
            </p>
            <p className="mb-2">Future research will focus on:</p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>Building a larger human-annotated editing corpus</li>
              <li>Collecting expert linguistic feedback</li>
              <li>Training Qwen using LoRA adapters</li>
              <li>Comparing multiple open-source LLMs</li>
              <li>Developing evaluation datasets for academic and historical language editing</li>
            </ul>
            <p className="mb-2">
              The final objective is to create a specialized AI language
              editor combining:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Generative AI</li>
              <li>Corpus linguistics</li>
              <li>Human linguistic expertise</li>
              <li>Statistical evaluation</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-neutral-900">Conclusion</h2>
            <p className="mb-4">
              This preliminary experiment demonstrates that large language
              models can perform meaningful historical language editing
              tasks.
            </p>
            <p className="mb-4">
              However, comparison with human normalization shows that
              general-purpose models may over-modernize historical forms.
            </p>
            <p>
              Future domain adaptation and expert-guided fine-tuning can
              improve reliability and move AI editing systems closer to
              expert linguistic performance.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
