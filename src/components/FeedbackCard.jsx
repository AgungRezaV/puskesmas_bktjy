const feedbackCard = ({ content, icon }) => (
    <div id="ciri_card" className='flex content flex-col w-[350px] mt-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500 hover:bg-blue-300 rounded-[20px]'>
        <img src={icon} alt="icons" className="w-[42px] h-[42px] mt-5 center"/>
        <p className='font-poppins text-center font-normal text-[18px] my-5 text-left'>{content}</p>
    </div>
);

export default feedbackCard