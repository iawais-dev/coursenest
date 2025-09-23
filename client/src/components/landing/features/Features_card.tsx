interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


 export const Feature_card: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="group bg-card text-card-foreground rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border">
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold  mb-4">{title}</h3>
      <p className=" leading-relaxed">{description}</p>
    </div>
  );
