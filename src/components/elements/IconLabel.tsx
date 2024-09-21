import Text from "./Text";
interface IconLabelProps {
  imgUrl? : string;
  title : string;
  className? : string;
  size : number
}

const IconLabel = ({ imgUrl, title, size,  className} : IconLabelProps) => {
  return (
    <div
    style={{width:size, height: 'auto'}}>
      <div 
      className={`bg-red-50 rounded-full`}
      style={{height:size}}
      >
      </div>
      <Text
        text={title}
        type='default'
        size={14}
        className="text-center mt-4"
      />
    </div>
  );
};

export default IconLabel;