import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import ArrowLink from '../atoms/ArrowLink';

const LeftContent = ({heading,subheading}) => {
  return (
    <div className="flex flex-col justify-between h-full py-2 min-h-[360px]">
      <div className="flex flex-col gap-6">
        <Heading>
          {heading}
        </Heading>
        <Paragraph text={subheading} />
      </div>
      <div className="mt-8">
        <ArrowLink />
      </div>
    </div>
  );
};

export default LeftContent;
