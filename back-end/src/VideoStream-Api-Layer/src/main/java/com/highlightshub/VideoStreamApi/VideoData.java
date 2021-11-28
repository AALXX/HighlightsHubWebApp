package com.highlightshub.VideoStreamApi;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "videos")
public class VideoData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String VideoPath;

    public String getVideoPath() {
        return VideoPath;
    }

    public void setVideoPath(String videoPath) {
        VideoPath = videoPath;
    }
}
