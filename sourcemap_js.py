import sourcemap
import sys
if __name__ == '__main__':
    # minified = open('h5.c6af85de.js').read()
    # map_path = sourcemap.discover(minified)
    # print map_path
    print sys.argv
    index = sourcemap.load(open(sys.argv[1]))
    token = index.lookup(line=int(sys.argv[2]), column=int(sys.argv[3]))
    print token.src
    print token.src_line
    print token.src_col
    print token