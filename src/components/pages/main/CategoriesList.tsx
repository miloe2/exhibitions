import IconLabel from "@/components/elements/IconLabel";
import Text from "@/components/elements/Text";
const CategoriesList = () => {
  return (
    <div className="my-20">
      <Text 
      text="카테고리별 전시회 -->"
      type="default"
      weight="bold"/>
      <div className="flex justify-between my-4">
        <IconLabel
          size={80}
          title="생활소비재"
        />
        <IconLabel
          size={80}
          title="IT"
        />
        <IconLabel
          size={80}
          title="일반기계"
        />
        <IconLabel
          size={80}
          title="섬유패션"
        />
        <IconLabel
          size={80}
          title="첨단융합"
        />
        <IconLabel
          size={80}
          title="종합/기타"
        />
        <IconLabel
          size={80}
          title="자동차조선"
        />
        <IconLabel
          size={80}
          title="환경에너지"
        />
      </div>
    </div>
  );
};

export default CategoriesList;