import numpy as np
import matplotlib.pyplot as plt
import scipy.io as sio
import scipy.signal
import librosa
from scipy import *
import copy

def process_audio(file_path, fs_target):
        # Đọc âm thanh từ tệp âm thanh
        audio, fs_original = librosa.load(file_path, sr=None)

        # Xử lý tần số lấy mẫu (resample) nếu cần
        if fs_original != fs_target:
            audio = librosa.resample(audio, orig_sr=fs_original, target_sr=fs_target)

        # Tính toán kích thước tín hiệu
        signal_size = len(audio)

        time = np.arange(0, signal_size) / fs_target

        # Vẽ biểu đồ tín hiệu âm thanh
        plt.figure(figsize=(10, 4))
        # librosa.display.waveshow(audio, sr=fs_target)
        plt.plot(time, audio)
        plt.title('Biểu đồ tín hiệu âm thanh')
        plt.xlabel('Thời gian (s)')
        plt.ylabel('Biên độ')
        plt.show()

        return audio, fs_target, signal_size

# Sử dụng hàm để đọc và xử lý âm thanh cho 3 tệp khác nhau
file_path = 'audio_1.wav'  # Đặt tên các tệp âm thanh của bạn ở đây
fs_target = 44100  # Đặt tần số lấy mẫu mục tiêu của bạn ở đây
audio, fs, signal_size = process_audio(file_path, fs_target)
if audio is not None:
    print(f"Tần số lấy mẫu: {fs} Hz")
    print(f"Kích thước tín hiệu: {signal_size} mẫu")