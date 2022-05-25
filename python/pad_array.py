def pad(array, min_size, value=None):
    """
    This function returns a new array padded with the value

    Args:
        array (list): the array to pad
        min_size (int): the minimum size of the new array
        value (any): the value to pad with

    Returns:
        list: the padded array
    """

    if min_size <= len(array):
        return array

    return array + [value] * (min_size - len(array))
