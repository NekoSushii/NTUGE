export var OverlayType
;(function (OverlayType) {
  OverlayType['IllegalMoveHover'] = 'Illegal'
  OverlayType['LegalMoveHover'] = 'Legal'
  OverlayType['PossibleMove'] = 'Possible'
})(OverlayType || (OverlayType = {}))

//define the overlay that will overlay the squares a color, dependent on getOverLayColor
export const Overlay = ({ type }) => {
  const color = getOverlayColor(type)
  return (
    <div
      className="overlay"
      role={type}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  )
}

//creating cases of illegal, legal and possible moves, and return a color to indicate
function getOverlayColor(type) {
  switch (type) {
    case OverlayType.IllegalMoveHover:
      return 'red'
    case OverlayType.LegalMoveHover:
      return 'green'
    case OverlayType.PossibleMove:
      return 'yellow'
  }
}
