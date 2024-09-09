export interface SwiperContentProps {
  imgUrl: string;
  link: string;
  onClick?: () => void;
}
export const SwiperContent = ({ imgUrl = 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9%22', link } :SwiperContentProps ) => {
  return(
    <>
      <div> 
        <img src={imgUrl} alt="" />
        
      </div>
    </>
  );
};

export default SwiperContent