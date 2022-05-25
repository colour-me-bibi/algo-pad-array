from pad_array import pad
import unittest


class TestPadArray(unittest.TestCase):
    def test_pad(self):
        self.assertEqual(pad([1, 2, 3], 5), [1, 2, 3, None, None])
        self.assertEqual(pad([1, 2, 3], 5, 'apple'), [1, 2, 3, 'apple', 'apple'])
