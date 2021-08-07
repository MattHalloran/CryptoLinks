FROM node:14.17-alpine
EXPOSE 3000

# Set variables
ARG PROJECT_DIR

# Create directories with correct permissions
RUN mkdir -p ${PROJECT_DIR}/node_modules/.cache &&\
    mkdir -p ${PROJECT_DIR}/build &&\
    chown -R node:node ${PROJECT_DIR}

# Install global packages (must be done as the root user)
RUN yarn global add react-scripts serve

# Switch to a user with less permissions
USER node

# Set working directory
WORKDIR ${PROJECT_DIR}

# Copy packages over first. This helps with caching
COPY --chown=node:node package.json package.json

# Install packages
RUN yarn

# Copy rest of repo over
COPY --chown=node:node src public ./
COPY --chown=node:node start.sh start.sh

USER root