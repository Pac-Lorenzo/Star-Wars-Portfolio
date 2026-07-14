type Props = {
  title: string;
  eyebrow?: string;
};

export default function SectionHeader({
  title,
  eyebrow,
}: Props) {
  return (
    <div className="section-header">
      {eyebrow ? (
        <p className="section-header-eyebrow">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="section-header-title starwars starwars-side">
        {title}
      </h1>
    </div>
  );
}
