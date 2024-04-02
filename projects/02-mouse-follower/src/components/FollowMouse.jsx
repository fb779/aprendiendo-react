import { useEffect, useState } from 'react';

export function FolloweMouse() {
  const [enabled, setEnabled] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  /**
   * useEfect(callback,[])
   * undefine : se activa cuando se renderiza el componente
   * []       : se ejecuta una vez cuando se monta el componenete
   * [value]  : se ejecuta cuando cada vez que cambia el estado de la prop
   */

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientY, clientX } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    /**
     * cleanup:
     * ==> cuando el componente se desmonta
     * ==> cuando cambian las dependencias, antes de ejecutar el efecto nuevamente
     */
    return () => {
      // cleanup
      setPosition({ x: 0, y: 0 });
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  );
}
