/**
 * @typedef {Object} Mimid
 */

const mimid = (listeners = []) => {
  /**
   * @param event event name to be listened to
   * @param handler callback function to be executed when the passed event is emitted
   * @return {Mimid} mimid event emitter with event listener
   */
  const on = (event, handler) => mimid([...listeners, {event, handler}])
  
  /**
   * @param event event name to be listened to
   * @param data callback function to be executed when the passed event is emitted
   * @return {Mimid} mimid event emitter with same listeners
   */
  const emit = (event, data) => {
    listeners
      .filter(el => el.event === event)
      .map(({ handler }) => handler(data))
    
    return mimid(listeners)
  }
  
  /**
   * Returns an event emitter without any 
   * @param event event name to be listened to
   * @param data callback function to be executed when the passed event is emitted
   * @return {Mimid} mimid event emitter without event
   */
  const off = (event) => mimid(listeners.filter(el => el.event !== event))

  /**
   * @return {Mimid} mimid event emitter without listeners
   */
  const close = () => mimid()
  
  return {
    on,
    emit,
    close,
    off,
    listeners: [...listeners],
  }
}
