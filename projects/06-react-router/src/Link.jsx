import { EVENTS } from './const/const';

export function navigate(href) {
  window.history.pushState({}, '', href);

  // evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ to, target, ...props }) {
  const handleClick = (event) => {
    // primary click
    const isMainEvent = event.button === 0;

    // any key to modified the event
    const isModifiedEvent =
      event.metaKey || event.ctrlKey || event.altKey || event.shiftKey;

    // diferent target to open the link
    const isManageableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
