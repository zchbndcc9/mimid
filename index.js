const gnome = (listeners = []) => {
  const on = (event, handler) => gnome([...listeners, {event, handler}])
  
  const emit = (event, data) => {
    listeners
      .filter(el => el.event === event)
      .map(({ handler }) => handler(data))
    
    return gnome(listeners)
  }
  
  const off = (event) => gnome(listeners.filter(el => el.event !== event))

  const close = () => gnome()
  
  return {
    on,
    emit,
    close,
    off,
    listeners: [...listeners],
  }
}
