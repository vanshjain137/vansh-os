import useWindowStore from "#store/window.js"

const WindowControls = ({target}) => {

    const {closeWindow, toggleMaximize} = useWindowStore();

  return (
    <div id="window-controls">
      <button type="button" className="close" onClick={() => closeWindow(target)} title="Close" />
      <button type="button" className="minimize" onClick={() => closeWindow(target)} title="Minimize" />
      <button type="button" className="maximize" onClick={() => toggleMaximize(target)} title="Maximize" />
    </div>
  )
}

export default WindowControls