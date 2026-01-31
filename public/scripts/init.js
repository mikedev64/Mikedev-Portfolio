/* interface IGlobalState {
        section: 'Inicio' | 'Experiencia' | 'Proyectos' | 'Certificaciones' | 'Comisiones';
}

class GlobalState implements IGlobalState {
        section: 'Inicio' | 'Experiencia' | 'Proyectos' | 'Certificaciones' | 'Comisiones' = 'Inicio';

        constructor() {
                const changeStateEvent = new CustomEvent('changeglobalstate', {  })
        }
        get<T extends keyof IGlobalState>(propertieName: T): IGlobalState[T] {
                return this[propertieName]
        }
        set(propertieName: keyof IGlobalState): void {
                
        }
} */

class GlobalState {
	constructor() {
		this.section = 'Inicio';
		this.intersectionCooldown = false;
	}
	get(propertieName) {
		return this[propertieName];
	}
	set(propertieName, propertieValue) {
		this[propertieName] = propertieValue;
		const event = new CustomEvent('changeglobalstate', { detail: propertieValue });
		dispatchEvent(event);
	}
	activateCooldown(duration = 1000) {
		this.intersectionCooldown = true;
		setTimeout(() => {
			this.intersectionCooldown = false;
		}, duration);
	}
}

globalThis.globalState = new GlobalState();
