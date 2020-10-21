# Usage:
# make				# initiate build, commit to git, and push
# make clean		# clean the build directory
# make build		# build site
# make serve		# run locally for testing

.PHONY = clean

BUILD_DIR = "./docs/"
BUILD_DATE = $(shell date --iso=seconds)

info:
	@echo "Please run a command"
	@echo "\tmake clean\tCleans build dir"
	@echo "\tmake build\tBuilds site for prod"
	@echo "\tmake serve\tServes local copy of site for testing"

clean:
	@echo "Cleaning Build Directory $(BUILD_DIR)"
	(ls $(BUILD_DIR))
	@echo "jk, not gonna do that!"

serve: servestep

servestep:
	(npm run serve)

build: buildstep

buildstep:
	(npm run build && git add . && git commit -m "Build $(BUILD_DATE)")
	@echo "Remember to push!"