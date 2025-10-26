interface AchievementCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  organization: string;
}

const AchievementCard = ({ title, description, image, date, organization }: AchievementCardProps) => {
  return (
  <div className="bg-white/90 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
  <p className="text-slate-900 dark:text-slate-200 mb-4">{description}</p>
  <div className="flex justify-between items-center text-sm text-slate-700 dark:text-slate-300">
          <span>{organization}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;