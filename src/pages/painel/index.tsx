import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Painel() {
  const navigate = useNavigate();

  const menus = [
    {
      label: "Novo Processo",
      description: "Submeta um novo processo para análise",
      href: "/painel/formulario",
      icon: "📄",
    },
    {
      label: "Meus Processos",
      description: "Visualize todos os seus processos",
      href: "/painel/meus-processos",
      icon: "📁",
    },
    {
      label: "Notificações",
      description: "Veja atualizações sobre seus processos",
      href: "/painel/notificacoes",
      icon: "🔔",
    },
    {
      label: "Perfil",
      description: "Altere sua senha e dados pessoais",
      href: "/painel/perfil",
      icon: "👤",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Acesso rápido</h1>
        <p className="text-muted-foreground mt-1">
          Escolha uma opção para continuar:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {menus.map((item) => (
          <motion.div
            key={item.href}
            onClick={() => navigate(item.href)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer bg-card border border-border rounded-2xl shadow-sm hover:shadow p-6 transition-shadow"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-lg font-semibold text-foreground">
              {item.label}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
