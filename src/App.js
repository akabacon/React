import React from 'react';
import { useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { User } from './component/user.jpg'
// DraggableBox元件
const DraggableBox = ({ children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      {children}
    </div>
  );
};

// 外部元件
const ExternalComponent = () => {
  return <div>我是外部元件</div>;
};

// App元件
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableBox>
        <img src="{User} " alt="image"/>
      </DraggableBox>
    </DndProvider>
  );
};

export default App;