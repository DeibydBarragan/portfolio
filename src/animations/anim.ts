export const fadeIn = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
}

export const flyUp = {
  initial: {
    y: 30,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    y: 30,
  }
}

export const flyDown = {
  initial: {
    y: -30,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
  }
}

export const flyLeft = {
  initial: {
    x: 30,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 30,
    opacity: 0,
  }
}

export const flyRight = {
  initial: {
    x: -20,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -20,
    opacity: 0,
  }
}

export const flyDownAndUp = {
  initial: {
    y: -20,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  }
}