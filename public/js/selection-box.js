document.addEventListener('DOMContentLoaded', () => {
    const selectionBox = document.createElement('div');
    selectionBox.style.position = 'absolute';
    selectionBox.style.border = '1px dashed #000080';
    selectionBox.style.backgroundColor = 'rgba(0, 0, 128, 0.2)';
    document.body.appendChild(selectionBox);

    let startX, startY, isSelecting = false;

    document.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startY = e.clientY;
        isSelecting = true;
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        selectionBox.style.width = '0px';
        selectionBox.style.height = '0px';
        selectionBox.style.display = 'block';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isSelecting) return;

        const currentX = e.clientX;
        const currentY = e.clientY;
        const width = Math.abs(currentX - startX);
        const height = Math.abs(currentY - startY);
        selectionBox.style.width = `${width}px`;
        selectionBox.style.height = `${height}px`;
        selectionBox.style.left = `${Math.min(currentX, startX)}px`;
        selectionBox.style.top = `${Math.min(currentY, startY)}px`;
    });

    document.addEventListener('mouseup', () => {
        isSelecting = false;
        selectionBox.style.display = 'none';
    });

    document.addEventListener('mouseleave', () => {
        if (isSelecting) {
            isSelecting = false;
            selectionBox.style.display = 'none';
        }
    });
});