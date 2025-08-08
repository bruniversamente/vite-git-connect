import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeaderDropdown({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0, clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ opacity: 1, height: "auto", clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1], when: "beforeChildren", staggerChildren: 0.03, delayChildren: 0.05 } }}
        exit={{ opacity: 0, height: 0, clipPath: "inset(100% 0% 0% 0%)", transition: { duration: 0.35 } }}
        className="fixed inset-x-0 top-16 z-50 bg-white border-b shadow-sm"
        onMouseLeave={onClose}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-medium text-neutral-500 tracking-wider mb-3">ESTUDO</p>
            <ul className="space-y-1.5">
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/solucoes/viabilidade">Estudo de Viabilidade</Link></li>
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/contato">Avaliação de Impacto</Link></li>
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/contato">Orientação Técnica</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-500 tracking-wider mb-3">APROVAÇÃO</p>
            <ul className="space-y-1.5">
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/solucoes/aprovacao">Processo OPEA</Link></li>
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/contato">Pré-COMAR</Link></li>
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/contato">PBZPA</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-500 tracking-wider mb-3">OUTROS</p>
            <ul className="space-y-1.5">
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/contato">Consultoria Especializada</Link></li>
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/contato">Monitoramento</Link></li>
              <li><Link className="block rounded px-2 py-1.5 hover:bg-neutral-50" to="/simulador">Simulador OPEA</Link></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
