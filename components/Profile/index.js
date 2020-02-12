import { Tabs } from 'antd';
import { Container, TabPaneX } from './style';
import Content from './Content';


function Profile() {

  const personaldata = [
    {
      title: 'Name',
      subtitle: 'Vishal Shetty',
      modify: true
    },
    {
      title: 'Gender',
      subtitle: 'Male',
      modify: true
    },
    {
      title: 'Phone Number',
      subtitle: '9028060604',
      modify: true
    },
    {
      title: 'Email',
      subtitle: 'vishalshetty1990@gmail.com',
      modify: true
    },
    {
      title: 'Address',
      subtitle: 'HSR Layout, Bangalore - 560068',
      modify: true
    },
    {
      title: 'Github',
      subtitle: 'https://github.com/',
      modify: false
    },
  ];

  const batchdata = [
    {
      title: 'Batch Name',
      subtitle: 'Woodpecker',
      modify: false
    },
    {
      title: 'Instructor Name',
      subtitle: 'Sundeep',
      modify: false
    },
    {
      title: 'Start Date',
      subtitle: '1st Dec 2019',
      modify: false
    },
    {
      title: 'Instructor Ratings (average)',
      subtitle: '4.8',
      modify: false
    }
  ];

  const settingdata = [
    {
      title: 'Account Password',
      subtitle: 'Account password status is strong - *****90',
      modify: true
    },
    {
      title: 'Backup Email',
      subtitle: 'vi************@****.com',
      modify: true
    },
    {
      title: 'Security Question',
      subtitle: 'Name of your first pet?',
      modify: true
    }
  ];

  return (
    <Container>

      <Tabs tabPosition="left">
        <TabPaneX tab="Personal Information" key="1" >
          <Content title="Personal Information" data={personaldata} />
        </TabPaneX>

        <TabPaneX tab="Batch Details" key="3">
          <Content title="Batch Information" data={batchdata} />
        </TabPaneX>

        <TabPaneX tab="Settings" key="2">
          <Content title="Account Setting" data={settingdata} />
        </TabPaneX>

      </Tabs>

    </Container>
  );

}

export default Profile;
