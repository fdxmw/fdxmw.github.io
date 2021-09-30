// Convert a signal from [start_time, signal_value] pairs to [x, y]
// coordinates for line drawing.
export function signal_to_path(signal) {
    if (signal.length == 0) return [];

    let last_signal_pair = signal[0];
    let path = [last_signal_pair];
    for (let i = 1; i < signal.length; i++) {
        let current_signal_pair = signal[i];
        let current_time = current_signal_pair[0];
        let current_signal_value = current_signal_pair[1];

        let last_signal_value = last_signal_pair[1];
        // Extend line horizontally from last_time to current_time.
        path.push([current_time, last_signal_value]);
        // Draw a vertical line at current_time if the signal value
        // changed.
        if (current_signal_value != last_signal_value) {
            path.push([current_time, current_signal_value]);
        }

        last_signal_pair = current_signal_pair;
    }
    // Extend the last signal value to ensure visibility.
    // let last_time = last_signal_pair[0];
    // let last_value = last_signal_pair[1];
    // path.push([last_time + 1, last_value]);

    return path;
}
