import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function initFontAwesome() {
    library.add(faUser, faBars, faPowerOff, fab);
}

export default initFontAwesome;
