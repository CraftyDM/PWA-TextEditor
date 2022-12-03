const buttInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    buttInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
buttInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;

    buttInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});

//sorry, I am a little bit 12 years old inside