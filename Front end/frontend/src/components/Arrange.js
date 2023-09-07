
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { memo } from 'react'

const style_box = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const style_dustbin = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  }

function Arrange(){

    const ItemTypes = {
        BOX: 'box',
      }

    const Box = function Box({ name }) {
        const [{ isDragging }, drag] = useDrag(() => ({
          type: ItemTypes.BOX,
          item: { name },
          end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
              alert(`You dropped ${item.name} into ${dropResult.name}!`)
            }
          },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
          }),
        }))
        const opacity = isDragging ? 0.4 : 1
        return (
          <div ref={drag} style={{ ...style_box, opacity }} data-testid={`box`}>
            {name}
          </div>
        )
    }

    const Dustbin = () => {
        const [{ canDrop, isOver }, drop] = useDrop(() => ({
          accept: ItemTypes.BOX,
          drop: () => ({ name: 'Dustbin' }),
          collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
        }))
        const isActive = canDrop && isOver
        let backgroundColor = '#222'
        if (isActive) {
          backgroundColor = 'darkgreen'
        } else if (canDrop) {
          backgroundColor = 'darkkhaki'
        }
        return (
          <div ref={drop} style={{ ...style_dustbin, backgroundColor }} data-testid="dustbin">
            {isActive ? 'Release to drop' : 'Drag a box here'} {/* what to display if there is an active box dropped over the dropzone */}
          </div>
        )
      }

    /* const Container = memo(function Container() { */
        return (
          <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Dustbin />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Box name="Glass" />
              <Box name="Banana" />
              <Box name="Paper" />
              <Box name='Hamster'/>
            </div>
          </div>
        )
      /* }) */
}

export default Arrange

