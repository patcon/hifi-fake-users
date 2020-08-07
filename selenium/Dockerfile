FROM selenium/standalone-chrome

# Install pulse audio
RUN sudo apt-get -qq update && sudo apt-get install -y pulseaudio

# Copy some media files into place
RUN sudo mkdir -p /opt/media
COPY cypress/fixtures/violin-sample.wav /opt/media/audio1.wav
COPY cypress/fixtures/beach-sample.mjpeg /opt/media/video1.mjpeg

# Use custom entrypoint
COPY entrypoint.sh /opt/bin/entrypoint.sh

ENTRYPOINT ["sh", "/opt/bin/entrypoint.sh"]
