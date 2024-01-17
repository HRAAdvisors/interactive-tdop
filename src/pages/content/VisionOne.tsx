import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';

const VisionOne = () => {
  return (
    <>
      <div className='w-full h-full bg-[#FFFDF6] px-4'>
        <div className='grid md:grid-cols-12'>
          <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center'>
            {/* <h1 className='md:text-6xl sm:text-2xl text-2xl py-6 font-light uppercase tracking-widest'>Vision and Purpose</h1> */}
            <TexasStripes />
            <p className='pt-12'>
              The Texas Digital Opportunity Plan sets the BDO’s vision and goals for digital
              opportunity in the state, assesses the current state of access and barriers to digital
              opportunity, outlines how the BDO will collaborate with stakeholders to address
              challenges and describes the strategies and actions the BDO will take to realize its
              vision and goals.
            </p>
            <p className='py-4'>
              Texas’ vision for digital opportunity:
              <br />
              <br />
              <strong>
                “Improve quality of life and promote economic growth by enabling fast, reliable, and
                affordable broadband connectivity for all residents and businesses, and by promoting
                universal broadband adoption and access to digital skills development.”
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionOne;
