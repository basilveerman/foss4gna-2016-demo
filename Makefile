DISTDIR=dist

all: static

.PHONY: static
static:
	npm run build
	git branch -D gh-pages || true
	git branch -D draft || true
	git checkout -b draft
	git add -f $(DISTDIR)
	git commit -am"Deploy site on gh-pages"
	git subtree split --prefix $(DISTDIR) -b gh-pages
	git push -f origin gh-pages:gh-pages
	git checkout master
