# Build Stage
FROM gradle:jdk21 AS build
COPY . /build
WORKDIR /build
RUN gradle clean build -x test

# Run Stage
FROM eclipse-temurin:21-jdk AS run
RUN mkdir -p /opt/app
# Copy the JAR file built in the 'build' stage to the 'run' stage
COPY --from=build /build/build/libs/*.jar /opt/myapp/backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=production", "/opt/myapp/backend.jar"]
