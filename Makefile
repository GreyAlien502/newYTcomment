.PHONY: all clean

all: newYTcomment.zip

newYTcomment.zip: src/manifest.json src/newYTcomment.js
	zip -j newYTcomment.zip src/*

clean:
	rm -f newYTcomment.zip
