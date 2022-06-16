import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import tasks from '../../utils/tasks.json';

const Tasks: React.FC = () => (
  <Flex flex="1" justify="center" alignItems="center">
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="droppable">
        {droppableProvided => (
          <Box className="droppable" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {draggableProvided => (
                  <Box ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                    <Text>{task.title}</Text>
                  </Box>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  </Flex>
);

export default Tasks;
