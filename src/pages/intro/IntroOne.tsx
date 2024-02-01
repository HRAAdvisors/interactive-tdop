import ScrollingSections from '@/components/ScrollingSections';

const scrollingContents = [
  {
    img: 'img/Capitol.svg',
    content: (
      <p>
        More and more each day, our lives depend on using the internet. Once a luxury, the internet
        has now become{' '}
        <strong>a necessity for access to health, education, employment, and many services.</strong>
      </p>
    ),
  },
  {
    img: 'img/LivingPlan.webp',
    content: (
      <div>
        <p>
          Yet <strong>not all Texas residents experience the same digital opportunity.</strong> Some
          Texans thrive in the digital world, while others struggle just to find an internet
          connection.
        </p>
      </div>
    ),
  },
  {
    img: 'img/2.webp',
    content: (
      <div>
        <p>
          In 2023, the Texas Broadband Development Office (BDO) brought together people and
          communities from across the state to ask about the barriers and challenges that Texans
          face when they try to get online and use the internet.{' '}
          <strong>
            They also asked about who is already working to support the digital needs of Texas
            communities, and how they’re doing it.
          </strong>
        </p>
      </div>
    ),
  },
  {
    img: 'img/Statewide.jpg',
    content: (
      <div>
        <p>
          <strong>Based on what the BDO heard from you,</strong> they wrote the Texas Digital
          Opportunity Plan or TDOP, which shares a vision for a new state of digital opportunity in
          Texas in which every Texan has access to:
        </p>
        <ul className='list-disc my-4 mx-4'>
          <li>high-quality, affordable high-speed internet service;</li>
          <li>high-quality, affordable internet-enabled devices;</li>
          <li>digital skills training; and</li>
          <li>cybersecurity protection.</li>
        </ul>
      </div>
    ),
  },
  {
    img: 'img/Vision.webp',
    content: (
      <div>
        <p>Scroll on to learn more about the Texas Digital Opportunity Plan!</p>
      </div>
    ),
  },
];

const IntroOne = () => {
  return (
    <div>
      <ScrollingSections id='unique-id-1' contents={scrollingContents} />
    </div>
  );
};

export default IntroOne;
