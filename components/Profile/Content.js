import { List } from 'antd';
import Title from './../Common/UIElements/Title';

function Content(props) {

  return (
    <>
      <Title>{props.title}</Title>

      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.subtitle}
            />
            {item.modify && <div><a href="#">Modify</a></div>}
          </List.Item>

        )}
      />
    </>
  )
}

export default Content;
