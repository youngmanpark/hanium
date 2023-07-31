package dev.project.hanium.response;

import dev.project.hanium.dto.Records;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LogResponseData {
    private String detector;
    private long time; //timestamp
    private double score; //record_score
    private String sourceIp; //over_field_value

    public static LogResponseData fromSourceIpRequest(Records records) {
        return LogResponseData.builder()
                .detector(records.getJob_id())
                //TODO : Casus 가 list 인게 마음에 걸림...
                .sourceIp(records.getOver_field_value())
                .score(records.getRecord_score())
                .time(records.getTimestamp())
                .build();
    }

    public static LogResponseData fromStatus(Records records) {
        return LogResponseData.builder()
                .detector(records.getJob_id())
                .time(records.getTimestamp())
                .score(records.getRecord_score())
                .sourceIp(records.getInfluencers().get(0).getInfluencer_field_values().get(0))
                .build();
    }

    @Builder
    public LogResponseData (String detector, long time, double score, String sourceIp) {
        this.detector = detector;
        this.time = time;
        this.score = score;
        this.sourceIp = sourceIp;
    }
}
