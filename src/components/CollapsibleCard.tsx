import { Card, Accordion, AccordionItem, Grid, Text } from '@mantine/core';
import ButtonLight from './ui/ButtonLight';

const CollapsibleCard = ({
  goalNumber,
  taskNumber,
  color,
  goalTitle,
  description,
  targetText,
  leftPanelContent,
  rightPanelContent,
  strategy1,
  strategy2,
  strategy3,
}: any) => {
  return (
    <Card shadow='sm' padding='0' radius='0' style={{ background: '#FFFDF6' }} className='my-2'>
      <Accordion>
        <AccordionItem value={`goal-${goalNumber}`}>
          <Accordion.Control
            style={{ alignItems: 'center', background: '#ececec', border: 'none' }}
          >
            <Grid className='uppercase font-sans'>
              <Grid.Col span={2} style={{ display: 'flex', background: `${color}` }}>
                <Grid.Col span={{ base: 12, md: 7 }} style={{ color: '#B9B9B9' }}>
                  <Text size='xs'>GOAL NO.{goalNumber} | </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }} style={{ color: '#FFF' }}>
                  <Text size='xs'>Task {taskNumber}</Text>
                </Grid.Col>
              </Grid.Col>
              <Grid.Col
                span={10}
                style={{ display: 'flex', alignItems: 'center', background: '#ececec' }}
              >
                <Text size='xs'>{goalTitle}</Text>
              </Grid.Col>
            </Grid>
          </Accordion.Control>
          <Accordion.Panel className='mx-2'>
            <Grid className='font-sans my-6'>
              <Grid.Col span={2} style={{ display: 'flex', alignContent: 'center' }}>
                <Text className='font-bold text-4xl'>{taskNumber}</Text>
              </Grid.Col>
              <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
                <Text className='font-bold text-xl'>{goalTitle}</Text>
              </Grid.Col>
            </Grid>
            <Grid className='h-full'>
              <Grid.Col span={{ base: 12, md: 6 }} className='my-4'>
                <div className='text-xs mb-8'>{description}</div>
                <h1 className='my-2 text-xs uppercase font-bold'>2030 Target</h1>
                <hr className='my-2'></hr>
                <Grid>
                  <Grid.Col span={6}>
                    <div className='text-xs'>{targetText}</div>
                  </Grid.Col>
                  <Grid.Col span={6}>{leftPanelContent}</Grid.Col>
                </Grid>
                <h1 className='my-2 text-xs uppercase font-bold'>How will Texas get there?</h1>
                <hr className='my-2'></hr>
                <Text className='text-xs'>
                  Texas will follow the following strategies to implement the state’s target goal:{' '}
                </Text>
                <Grid className='my-8'>
                  <Grid.Col span={4}>
                    <Grid>
                      <Grid.Col span={3}>
                        <Text className='text-lg font-bold'>1</Text>
                      </Grid.Col>
                      <Grid.Col span={9}>
                        <Text className='text-xs'>{strategy1}</Text>
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Grid>
                      <Grid.Col span={3}>
                        <Text className='text-lg font-bold'>2</Text>
                      </Grid.Col>
                      <Grid.Col span={9}>
                        <Text className='text-xs'>{strategy2}</Text>
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Grid>
                      <Grid.Col span={3}>
                        <Text className='text-lg font-bold'>3</Text>
                      </Grid.Col>
                      <Grid.Col span={9}>
                        <Text className='text-xs'>{strategy3}</Text>
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                </Grid>
                <ButtonLight text='Dive deeper into broadband availability.' />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }} className='my-4'>
                {rightPanelContent}
              </Grid.Col>
            </Grid>
          </Accordion.Panel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default CollapsibleCard;
