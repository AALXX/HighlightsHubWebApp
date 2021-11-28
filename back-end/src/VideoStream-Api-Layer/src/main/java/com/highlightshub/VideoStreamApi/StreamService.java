package com.highlightshub.VideoStreamApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;


@Service
public class StreamService {

    private static final String VideoPathFormat = "file:../../../videos/%s";

    //it loads video from file system
    @Autowired
    public ResourceLoader VideoLoader;

    public Mono<Resource> GetVideo(String VideoFileLocation) {

        return Mono.fromSupplier(() -> VideoLoader.getResource(String.format(VideoPathFormat, VideoFileLocation)));
    }
}
