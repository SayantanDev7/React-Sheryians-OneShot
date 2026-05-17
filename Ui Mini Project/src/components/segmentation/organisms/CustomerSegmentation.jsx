import LeftContent from '../molecules/LeftContent';
import SegmentCard from '../molecules/SegmentCard';
import PlatformLabel from '../atoms/PlatformLabel';
import Tag from '../atoms/Tag';

const CustomerSegmentation = () => {
  const segmentData = [
    {
      number: "1",
      text: "Prime customers, that have access to bank credit and are satisfied with the current product",
      buttonText: "Satisfied",
      buttonColor: "bg-[#4b6bfb] group-hover:bg-[#3a56d4]",
      buttonTextClass: "text-white",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      number: "2",
      text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      buttonText: "Underserved",
      buttonColor: "bg-[#5c4bdf] group-hover:bg-[#4939b8]",
      buttonTextClass: "text-white",
      imageUrl: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=600&auto=format&fit=crop"
    },
    {
      number: "3",
      text: "Customers from near-prime and sub-prime segments with no access to bank credit",
      buttonText: "Underbanked",
      buttonColor: "bg-[#c2f23b] group-hover:bg-[#a8d432]",
      buttonTextClass: "text-black",
      imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop"
    },
    {
      number: "4",
      text: "Prime customers, that have access to school credit and are satisfied with the current service",
      buttonText: "Satisfied",
      buttonColor: "bg-[#c2f23b] group-hover:bg-[#a8d432]",
      buttonTextClass: "text-black",
      imageUrl: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ]
  return (
    <div className="bg-[#f2f5f8] min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 font-sans">
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-14 w-full max-w-[1240px] mx-auto flex flex-col gap-10 lg:gap-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative">
        
        {/* Minimal elegant top navbar inside the card */}
        <div className="flex justify-between items-start w-full">
          <Tag text="Target Audience" />
          <div className="hidden lg:block mt-1">
            <PlatformLabel />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left column */}
          <div className="w-full lg:w-[32%]">
            <LeftContent heading="Prospective customer segmentation"
    subheading="Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups" />
          </div>

          {/* Right — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full lg:w-[68%]">
                   
                  {segmentData.map((item, index) => (
                    <SegmentCard
                      key={index}
                      number={item.number}
                      text={item.text}
                      buttonText={item.buttonText}
                      buttonColor={item.buttonColor}
                      buttonTextClass={item.buttonTextClass}
                      imageUrl={item.imageUrl}
                    />
                  ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
