/**
 * @typedef {Object} Gnome
 */

const gnome = (listeners = []) => {
  /**
   * @param event event name to be listened to
   * @param handler callback function to be executed when the passed event is emitted
   * @return {Gnome} gnome event emitter with event listener
   */
  const on = (event, handler) => gnome([...listeners, {event, handler}])
  
  /**
   * @param event event name to be listened to
   * @param data callback function to be executed when the passed event is emitted
   * @return {Gnome} gnome event emitter with same listeners
   */
  const emit = (event, data) => {
    listeners
      .filter(el => el.event === event)
      .map(({ handler }) => handler(data))
    
    return gnome(listeners)
  }
  
  /**
   * Returns an event emitter without any 
   * @param event event name to be listened to
   * @param data callback function to be executed when the passed event is emitted
   * @return {Gnome} gnome event emitter without event
   */
  const off = (event) => gnome(listeners.filter(el => el.event !== event))

  /**
   * @return {Gnome} gnome event emitter without listeners
   */
  const close = () => gnome()
  
  return {
    on,
    emit,
    close,
    off,
    listeners: [...listeners],
  }
}
