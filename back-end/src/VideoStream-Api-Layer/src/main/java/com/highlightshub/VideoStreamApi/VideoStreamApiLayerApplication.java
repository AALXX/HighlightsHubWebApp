package com.highlightshub.VideoStreamApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;

@SpringBootApplication
@RestController
public class VideoStreamApiLayerApplication implements CommandLineRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private StreamService service;

    // It Get Video Data from videos table
    public List<VideoData> GetVideoData(String VideoToken) {
        return jdbcTemplate.query("SELECT videoPath FROM videos WHERE VideoToken = ?",
                new BeanPropertyRowMapper<VideoData>(VideoData.class), VideoToken);
    }

    @GetMapping(value = "api/video-stream/{VideoToken}", produces = "video/mp4")
    public Mono<Resource> GetVideo(@PathVariable String VideoToken, @RequestHeader("Range") String range) {
        List<VideoData> data = GetVideoData(VideoToken);
        return service.GetVideo(data.get(0).getVideoPath());
    }

    public static void main(String[] args) {
        SpringApplication.run(VideoStreamApiLayerApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Server running on http://192.168.72.81:8200/");
    }
}
