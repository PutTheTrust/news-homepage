interface NewsCardProps {
  title: string;
  content: string;
}

function NewsCard({ title, content }: NewsCardProps) {
  return (
    <div className="py-9">
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-grayish-blue mt-2">{content}</p>
    </div>
  );
}

export default NewsCard;
