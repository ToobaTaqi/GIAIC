"""
  Returns True if n is between low and high, inclusive. 
  high is guaranteed to be greater than low.
"""
def in_range(n, low, high):
    if n >= low and n <= high:
	    return True
    return False
    # we could have also included an else statement, but since we are returning, it's fine without!

print(in_range(3,3,4))